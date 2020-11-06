module.exports = (sequelize, DataTypes) => {

    let cols = {
        idUsuarios: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        Nombre: {
            type: DataTypes.STRING

        },
        Apellido: {
            type: DataTypes.STRING

        },
        Nombre_Usuario: {
            type: DataTypes.STRING

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