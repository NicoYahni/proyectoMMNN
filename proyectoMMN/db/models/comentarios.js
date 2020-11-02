module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
       id_post: {
            type: DataTypes.INTEGER

        },
        id_usuarios: {
            type: DataTypes.INTEGER

        },
        comentario: {
            type: DataTypes.VARCHAR

        },
        fecha: {
            type: DataTypes.DATE
        }
    }


    let config = {
        tableName: "comentarios",
        timestamps: false
    }

    let Comentario = sequelize.define("Comentario", cols, config);

    return Comentario;
}