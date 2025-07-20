module.exports = {
    getPagination: (page, size) => {
        const limit = size ? +size : 10;
        const offset = page ? (page - 1) * limit : 0;
        return { limit, offset };
    },

    getPagingData: (data, page, limit) => {
        const { count: totalItems, rows: records } = data;
        const currentPage = page ? +page : 1;
        const totalPages = Math.ceil(totalItems / limit);
        return { totalItems, data: records, totalPages, currentPage };
    },
};
