import {CardProps} from "@/shared/types/card";

export const filterCampers = (original: any, filters: any) => {
    const byLocation = original.filter((item: any) => item.location === filters.location);
    if(filters.equipment.length === 0 && filters.type.length === 0) {return byLocation}

    let resultSet = new Set();

    // if(filters.equipment.length > 0) {
    //     const filteredSet = new Set();
    //
    //     if (filters.equipment.includes('ac')) {
    //         byLocation.filter((item: CardProps) => item.details.airConditioner > 0).forEach((item: CardProps) => filteredSet.add(item));
    //     }
    //
    //     if (filters.equipment.includes('transmission')) {
    //         byLocation.filter((item: CardProps) => item.transmission === "automatic").forEach((item: CardProps) => filteredSet.add(item));
    //     }
    //
    //     if (filters.equipment.includes('kitchen')) {
    //         byLocation.filter((item: CardProps) => item.details.kitchen > 0).forEach((item: CardProps) => filteredSet.add(item));
    //     }
    //
    //     if (filters.equipment.includes('TV')) {
    //         byLocation.filter((item: CardProps) => item.details.TV > 0).forEach((item: CardProps) => filteredSet.add(item));
    //     }
    //
    //     if (filters.equipment.includes('shower')) {
    //         console.log('filters.equipment.includes(\'shower\')', byLocation)
    //         byLocation.filter((item: CardProps) => item.details.shower > 0 || item.details.toilet > 0).forEach((item: CardProps) => filteredSet.add(item));
    //     }
    //
    //     const resultSet = {...filteredSet};
    //
    // }

    if (filters.type.length > 0) {
        const byType: CardProps[] = byLocation.filter((item: any) => filters.type.includes(item.form));
        resultSet = new Set([...resultSet, ...byType]);
    }

    return [...resultSet]

}