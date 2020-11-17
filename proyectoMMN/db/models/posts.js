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
    Post.associate = function(models){
        //aca adentro explico la relacion
    Post.belongsTo(models.Usuario,{
        as:"relacion",
        foreignKey: 'id_Usuario'
    } )
   // Post.belongsToMany(models.Comentario, )
        

    }
    
    return Post;
}