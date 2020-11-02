module.exports = (sequelize, DataTypes) => {

    let cols = {
        idUsuarios: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        Nombre: {
            type: DataTypes.VARCHAR

        },
        Apellido: {
            type: DataTypes.VARCHAR

        },
        Nombre_Usuario: {
            type: DataTypes.VARCHAR

        },
        Nacimiento: {
            type: DataTypes.DATE
        }
    }


    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    let Usuario = sequelize.define("Usuario", cols, config);

    return Usuario;
}