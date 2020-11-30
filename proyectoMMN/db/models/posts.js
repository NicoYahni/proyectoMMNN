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

    let Post = sequelize.define("Post", cols, config);              //EL "Post" ES EL NOMBRE QUE LE PONEMOS A LA TABLA 
    Post.associate = function(models){                      
        //aca adentro explico la relacion
    Post.belongsTo(models.Usuario,{                                 //TODOS LOS POSTEOS PERTENECEN A UN USUARIO, CREAR RELACION ENTRE POSTEOS Y USUARIO
        as:"relacion",                                              // NOMBRE AL QUE VAMOS A LLAMAR PARA CONECTAR AMBAS TABLAS
        foreignKey: 'id_Usuario'                                    // SE CONECTAN A TRAVES DE "is_Usuario"
    } )
   // Post.belongsToMany(models.Comentario, )
        

    }
    
    return Post;
}