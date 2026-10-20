/**
 * shared.js - Cấu hình hệ thống và tiện ích dùng chung
 * THPT Bình Tân - Môn Tin học
 */

// 1. Cấu hình STUN/TURN chuẩn xuyên tường lửa NAT / 3G / 4G / Wi-Fi trường học
const APP_RTC_CONFIG = {
  iceServers: [
    { urls: 'stun:stun.relay.metered.ca:80' },
    { urls: 'stun:stun.l.google.com:19302' },
    {
      urls: 'turn:global.relay.metered.ca:80',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    },
    {
      urls: 'turn:global.relay.metered.ca:443',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    },
    {
      urls: 'turn:global.relay.metered.ca:443?transport=tcp', // Xuyên tường lửa Wi-Fi chặn UDP
      username: 'openrelayproject',
      credential: 'openrelayproject'
    }
  ],
  iceCandidatePoolSize: 10
};

// 2. Định danh phòng máy giáo viên
const TEACHER_ROOM_ID = 'thptbt-teacher-room';

// 3. Danh sách lớp kiểm tra
const EXAM_CLASSES = ['12A3', '12A9', '12A14'];

// 4. Cấu hình chất lượng Camera siêu nhẹ (chống nghẽn mạng khi xem cùng lúc nhiều em)
const OPTIMIZED_VIDEO_CONSTRAINTS = {
  audio: false,
  video: {
    width: { ideal: 320, max: 320 },
    height: { ideal: 240, max: 240 },
    frameRate: { ideal: 10, max: 12 },
    facingMode: 'user'
  }
};

// 5. Hàm lọc chuỗi chống XSS
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}