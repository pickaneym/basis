export function getCoreStyles(fontSize: string, fontFamily: string = ''): string {
    return `
body{
   font-size: ${fontSize};${fontFamily}
}

h1{

}

h2{

}

h3{

}

h4{

}

h5{

}

small{

}

strong{

}

a{
   text-decoration: none;
   color: #fff;
}

a:hover{
   text-decoration: none;
}


button:focus,
input:focus,
textarea:focus,
a:focus{
   outline: none;
}

`
};
