import {DetailsItem} from "@/shared/types/card";

export const filterCampers = (original: any, filters: any) => {
    const byLocation = original.filter((item: any) => item.location === filters.location);
    if(filters.equipment.length === 0 && filters.type.length === 0) {return byLocation}

    if(filters.type.length > 0) {
        const byType: DetailsItem[] = [];
        byLocation.forEach((item: any) => {
            if(filters.type.includes(item.form)) {
                byType.push(item)
            }
        })
        return byType
    }


}