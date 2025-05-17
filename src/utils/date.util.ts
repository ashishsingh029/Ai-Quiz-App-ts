import moment from "moment";

export const formatDateIn2Slash2SlashFourRepresentation = (date: Date) => {
    const formattedDate: string = moment(date).format("DD/MM/YYYY");
    return formattedDate;
}