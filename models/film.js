module.exports = (sequelize, DataTypes) => {
    const film = sequelize.define("film", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nama_Film: { 
            type: DataTypes.STRING
        },
        Deskripsi: {
            type: DataTypes.STRING
        },
        Sutradara: {
            type: DataTypes.VARCHAR
        },
        Tahun_Terbit: {
            type: DataTypes.DATE
        },
        Genre: { 
            type: DataTypes.VARCHAR
        }
    });
    return film;
};