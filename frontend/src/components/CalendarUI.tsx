import { eachDayOfInterval, startOfMonth, endOfMonth, format, getDay, addMonths } from "date-fns";
import { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon} from "@heroicons/react/24/solid";

const CalendarUI: React.FC = () => {

    const [monthOffset, setMonthOffset] = useState(0);
    const [calendar, setCalendar] = useState<{day: string, date: string, monthName: string}[]>([]);

    function createCalendar(date: Date): { day: string, date: string, monthName: string }[] {
        const start: Date = startOfMonth(date);
        const end: Date = endOfMonth(date);
        const interval = { start, end };
        const days: Date[] = eachDayOfInterval(interval);
        const formattedDays: { day: string, date: string, monthName: string }[] = days.map((day) => ({
            day: format(day, "EEE"),
            date: format(day, "dd-MM-yyyy"),
            monthName: format(day, "MMMM")
        }));
        console.log(calendar.map(day => day.monthName));

        const firstDayOfWeek = getDay(start);
        for (let i = 0; i < firstDayOfWeek; i++) {
            formattedDays.unshift({ day: "", date: "", monthName: format(start, "MMMM") });
        }

        return formattedDays;
    }

    useEffect(() => {
        setCalendar(createCalendar(addMonths(new Date(), monthOffset)));
    }, [monthOffset]);
        
    const handlePreviousMonth = () => {
        const newOffset = monthOffset - 1;
        setMonthOffset(newOffset);
        setCalendar(createCalendar(addMonths(new Date(), newOffset)));
    }
    
    const handleNextMonth = () => {
        const newOffset = monthOffset + 1;
        setMonthOffset(newOffset);
        setCalendar(createCalendar(addMonths(new Date(), newOffset)));
    }

    console.log(calendar);
    console.log(calendar[0]);

    return (
        <div>
            <div style={{ display: "flex" }}>
                <ChevronDownIcon className="h-6 w-6" onClick={handlePreviousMonth} />
                {calendar[0]?.monthName}
                <ChevronUpIcon className="h-6 w-6" onClick={handleNextMonth} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "10px" }}>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                    <div key={index} style={{ fontWeight: "bold" }}>{day}</div>
                ))}
                {calendar.map((item, index) => (
                    <p key={index}>{item.date}</p>
                ))}
            </div>
        </div>
    );
}

export default CalendarUI;