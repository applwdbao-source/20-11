document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const iphoneContainer = document.querySelector('.iphone-container');
    const screen = document.querySelector('.screen');
    const notificationBar = document.getElementById('notificationBar');
    const messengerWindow = document.getElementById('messengerWindow');
    const videoMessage = document.getElementById('videoMessage');
    const videoPlayer = document.getElementById('videoPlayer');
    const myVideo = document.getElementById('myVideo');
    const closeVideoBtn = document.getElementById('closeVideoBtn');
    const backBtn = document.querySelector('.back-btn');

    let isLetterOpen = false;

    // --- BƯỚC 1: Mở/Đóng Thư ---
    envelope.addEventListener('click', function() {
        if (envelope.classList.contains('open')) {
            // Đóng thư: Bắt đầu hiệu ứng iPhone
            envelope.classList.remove('open');
            isLetterOpen = true; 
            
            // Ẩn thư
            letter.style.opacity = 0;
            letter.style.transform = 'translateY(150%) scale(0.5)';

            // Hiển thị iPhone sau khi đóng thư
            setTimeout(showIphone, 700); 

        } else {
            // Mở thư
            envelope.classList.add('open');
            
            // Hiện thư
            letter.style.opacity = 1;
            letter.style.transform = 'translateY(-100px) scale(1)';
            
            // Đảm bảo iPhone ẩn khi đọc thư
            iphoneContainer.classList.remove('visible');
            screen.classList.remove('active');
            notificationBar.classList.remove('show');
            messengerWindow.classList.remove('open');
            videoPlayer.classList.remove('playing');
            myVideo.pause();
            myVideo.currentTime = 0;
        }
    });

    // --- BƯỚC 2: Hiện iPhone và Thông báo ---
    function showIphone() {
        iphoneContainer.classList.add('visible');
        
        // Bật màn hình
        setTimeout(() => {
            screen.classList.add('active'); 
            
            // Hiển thị thông báo sau khi màn hình sáng
            setTimeout(() => {
                notificationBar.classList.add('show'); 
            }, 500);
        }, 500);
    }
    
    // --- BƯỚC 3: Mở Messenger ---
    notificationBar.addEventListener('click', function() {
        // Nhắc nhở người dùng
        alert('Có tin nhắn mới từ A1-K62! Mở Messenger.');
        
        // Mở cửa sổ Messenger và ẩn thông báo
        notificationBar.classList.remove('show'); 
        messengerWindow.classList.add('open');
    });

    // --- BƯỚC 4: Phát video ---
    videoMessage.addEventListener('click', function() {
        // Hiển thị khung video và phát
        videoPlayer.classList.add('playing');
        myVideo.play();
    });

    // --- Đóng video ---
    closeVideoBtn.addEventListener('click', function() {
        myVideo.pause();
        myVideo.currentTime = 0;
        videoPlayer.classList.remove('playing');
    });
    
    // --- Nút Quay lại Messenger ---
    backBtn.addEventListener('click', function() {
        messengerWindow.classList.remove('open');
    });
});
