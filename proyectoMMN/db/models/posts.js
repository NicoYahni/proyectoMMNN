module.exports = (sequelize, DataTypes) => {

    let cols = {
        IdPost: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        Id_usuario: {
            type: DataTypes.INTEGER

        },
        Texto_Posteo: {
            type: DataTypes.STRING

        },
        URL: {
            type: DataTypes.STRING

        },
        Fecha_Creacion: {
            type: DataTypes.DATE
        }
    }


    let config = {
        tableName: "Posts",
        timestamps: false
    }

    let Post = sequelize.define("Post", cols, config);

    return Post;
}