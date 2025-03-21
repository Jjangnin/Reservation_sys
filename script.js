function submitReservation(event) {
    event.preventDefault();
    
    // 예약 정보를 가져옵니다.
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const car = document.getElementById('car').value;

    // 여기에서 서버로 예약 정보를 전송할 수 있습니다.
    // 현재는 콘솔에 예약 정보를 출력합니다.
    console.log('이름:', name);
    console.log('이메일:', email);
    console.log('예약 날짜:', date);
    console.log('차 기종:', car);

    // 예약 성공 메시지를 표시합니다.
    alert('예약이 완료되었습니다.');

    // 폼을 초기화합니다.
    document.getElementById('reservationForm').reset();
}

document.addEventListener('DOMContentLoaded', function() {
    const carSelect = document.getElementById('car');
    carSelect.addEventListener('change', function() {
        const selectedCar = carSelect.options[carSelect.selectedIndex].text;
        console.log(`${selectedCar}가 선택되었습니다.`);
        alert(`${selectedCar}가 선택되었습니다.`);
    });
});
