import React, { useEffect } from 'react';
function DeliveryAndResponse(props) {
    useEffect(() => {
        console.log(props.location.state)
    })

    return (

        < div style={{ textAlign: 'right', padding: '10% 15% 10% 15%', lineHeight: '1.5' }
        }>
            <h1>משלוחים | אחריות </h1>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>

                <div style={{ flex: 1 }}>
                    <p style={{ alignSelf: 'right' }}>
                        'משלוחים
                        שליח עד הבית | (עד 5 ימי עסקים) - 19₪
                        משלוחים חינם - בקנייה מעל 199₪
                        איסוף עצמי | מהחנות בדיזנגוף 89, תל אביב - חינם
                        החלפות
                        אם ברצונך להחליף פריט ניתן להגיע לחנות בדיזינגוף 89, תל אביב
                        אם ברצונך להחליף פריט באמצעות שליח צרי קשר לתיאום
                        במספר 03 - 5160830
                        ושליח יגיע אליך עם הפריט החדש למסירה ואיסוף של הפריט הקודם בעלות 15₪ בלבד
                        החלפה שניה בעלות 25₪
                        החזרות
                        ניתן לבצע החזרה או החלפה עד 14 יום מקבלת הפריט
                        החזרה באמצעות שליח מבית הלקוח - 25 ש״ח
                        החזרת החבילה לחנות - דיזנגוף 89, ת״א - חינם
                    </p>
                </div>
                <div style={{ flex: 1 }}></div>
            </div>
        </div >
    )
}
export default DeliveryAndResponse;