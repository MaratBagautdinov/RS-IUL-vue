export function formatDate(dateString: string | number | Date) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}
export function formatDateDDMMYY(dateString: string | number | Date) {
    if (!dateString) {
        return ''; // Если дата отсутствует или null, возвращаем пустую строку
    }
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const year = date.getUTCFullYear();

    return `${day}.${month}.${year}`;
}