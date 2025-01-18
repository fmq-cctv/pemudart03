let currentElement = null;

  // Tampilkan durasi video di thumbnail
  document.querySelectorAll('.gallery-item video').forEach(video => {
    video.addEventListener('loadedmetadata', () => {
      const duration = formatTime(video.duration);
      const durationElement = video.parentElement.querySelector('.video-duration');
      durationElement.textContent = duration;
    });
  });

  function openModal(element) {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');

    // Reset modal
    modalContent.innerHTML = '';

    // Simpan elemen yang sedang dibuka
    currentElement = element.cloneNode(true);
    currentElement.style.width = '100%';
    currentElement.style.height = 'auto';
    currentElement.setAttribute('controls', true);
    currentElement.setAttribute('autoplay', true);

    // Tambahkan elemen ke modal
    modalContent.appendChild(currentElement);
    modal.style.display = 'flex';
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    currentElement = null;
  }

  function downloadContent() {
    if (!currentElement) return;

    // Ambil sumber file dari elemen
    const source = currentElement.src || currentElement.currentSrc;

    // Buat elemen <a> untuk mendownload
    const link = document.createElement('a');
    link.href = source;
    link.download = source.split('/').pop(); // Nama file diambil dari URL
    link.click();
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }