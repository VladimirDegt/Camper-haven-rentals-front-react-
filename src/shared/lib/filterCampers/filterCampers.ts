export const filterCampers = (original: any, filters: any) => {
    let byLocation = original.filter((item: any) => item.location === filters.location);
    if(filters.equipment.length === 0 && filters.type.length === 0) {return byLocation}

    for (const equipment of filters.equipment) {
        let checkArr = []
        for (const origin of byLocation) {
            const checkValue = {
                'airConditioner': origin.details.airConditioner,
                'kitchen': origin.details.kitchen,
                'shower': origin.details.shower,
                'toilet': origin.details.toilet,
                'TV': origin.details.TV,
                'transmission': origin.transmission
            };
            // @ts-ignore
            if (!checkValue[equipment]) {
                continue
            }
            checkArr.push(origin)
        }
        byLocation = checkArr;
    }

    if (filters.type.length > 0) {
        byLocation = byLocation.filter((item: any) => filters.type.includes(item.form));
    }

    return byLocation

};