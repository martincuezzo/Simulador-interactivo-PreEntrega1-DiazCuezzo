const general=90000
const vip=140000
const servicio=9000
function sectores(sector,cantidad) {
    return (sector*cantidad)+(cantidad*servicio);
}
let msj = prompt('Desea comprar un ticket?').toLowerCase()
switch (msj){
    case "si":
        let preciofinal=0;
        while( msj=="si"){
            const sector=prompt('ingrese el sector:').toLowerCase()
            switch(sector){
                case "vip":
                    const cantidad=Number(prompt('ingrese la cantidad de entradas requeridas:'))
                    preciofinal=preciofinal+sectores(vip,cantidad)
                    // preciofinal=(vip*cantidad)+(cantidad+servicio);
                    break;
                    case "general":
                        const cantidad1=Number(prompt('ingrese la cantidad de entradas requeridas:'))
                        preciofinal=preciofinal+sectores(general,cantidad1)
                        // preciofinal=(general*cantidad1)+(cantidad1*servicio);
                        break;
                        default:
                            alert('ingresa un dato correcto:vip o general')
            }
            msj=prompt('Desea seguir comprando?').toLowerCase()       
            switch(msj){
                case "si":
                    break;
                    case "no":
                        break
                        default:
                            alert('ingresa un dato correcto:si o no')
            }
        }
        alert(`paga el total de: $${preciofinal}, gracias por su compra!`)
        case "no":
            break;
            default:
                alert('Se esperaba "si" o "no", vuelve a intentarlo')
                break;

}
