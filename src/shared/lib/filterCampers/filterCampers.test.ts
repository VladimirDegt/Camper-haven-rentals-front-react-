import { filterCampers } from "./filterCampers";

describe('filterCampers', () => {
    const campers = [
        { id: 1, location: 'Ukraine, Kyiv', details: { airConditioner: 1, kitchen: 0 }, form: 'alcove', transmission: 'automatic' },
        { id: 2, location: 'Ukraine, Lviv', details: { airConditioner: 0, kitchen: 0 }, form: 'fullyIntegrated', transmission: 'automatic' },
        { id: 3, location: 'Ukraine, Odesa', details: { airConditioner: 2, kitchen: 1 }, form: 'panelTruck', transmission: 'automatic' },
        { id: 4, location: 'Ukraine, Kharkiv', details: { airConditioner: 1, kitchen: 1 }, form: 'alcove', transmission: 'automatic' },
    ];

    test('filter by location', () => {
        const filters = { location: 'Ukraine, Kyiv', equipment: [], type: [] };
        const result = filterCampers(campers, filters);
        expect(result).toEqual([campers[0]]);
    });

    test('filter by location and equipment', () => {
        const filters = { location: 'Ukraine, Kyiv', equipment: ['kitchen'], type: [] };
        const result = filterCampers(campers, filters);
        expect(result).toEqual([]);
    });

    test('filter by location, equipment, and type', () => {
        const filters = { location: 'Ukraine, Kyiv', equipment: ['kitchen'], type: ['alcove'] };
        const result = filterCampers(campers, filters);
        expect(result).toEqual([]);
    });
});

