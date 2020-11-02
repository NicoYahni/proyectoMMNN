module.exports = (sequelize, DataTypes) => {

    let cols = {
        idPost: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        id_usuario: {
            type: DataTypes.INTEGER

        },
        Texto_Posteo: {
            type: DataTypes.VARCHAR

        },
        URL: {
            type: DataTypes.VARCHAR

        },
        Fecha_Creacion: {
            type: DataTypes.DATE
        }
    }


    let config = {
        tableName: "posts",
        timestamps: false
    }

    let Post = sequelize.define("Post", cols, config);

    return Post;
}