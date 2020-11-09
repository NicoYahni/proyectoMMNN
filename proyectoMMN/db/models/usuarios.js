module.exports = (sequelize, DataTypes) => {

    let cols = {
        idUsuario: {
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
        },
        Mail: {
            type: DataTypes.STRING
        },
        Password: {
            type: DataTypes.INTEGER
        }
    }


    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    let Usuario = sequelize.define("Usuario", cols, config);

    return Usuario;
}