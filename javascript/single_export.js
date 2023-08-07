export default function capitalize_first_and_last(str){
    return str[0].toUpperCase() + str.slice(1, -1) + str[str.length - 1].toUpperCase();
}
