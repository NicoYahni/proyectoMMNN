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
            type: DataTypes.STRING
        },
        Pregunta_Seguridad: {
            type: DataTypes.STRING
        },
        Respuesta_Seguridad: {
            type: DataTypes.STRING
        }
    }


    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    let Usuario = sequelize.define("Usuario", cols, config);
    
    Usuario.associate = function(models){
        //aca adentro explico la relacion
            Usuario.hasMany(models.Post, {
                as:"relacion",
                foreignKey: 'id_Usuario'
            } )
                
        
            }

    return Usuario;
}