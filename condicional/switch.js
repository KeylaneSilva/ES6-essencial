const fruta = 'mamão'

switch(fruta){
    case 'banana':
        console.log('R$ 3,00/KG')
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00/KG')
        break;
    default:
        console.log('Produto não existe no estoque')
        break;

}