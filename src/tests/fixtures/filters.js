import moment from "moment";

const filters = {
    text : '',
    sortByDate : 'date',
    startDate : undefined,
    endDate : undefined
}

const altFilters = {
    text : 'bills',
    sortByDate : 'date',
    startDate : moment(0),
    endDate : moment(0).add(3,'days')
}

export {filters,altFilters};