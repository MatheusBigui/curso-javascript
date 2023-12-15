/*
&& [and(e)]
|| [or(ou)]
!  [not(não)]


|    and   |    |    or    |
| V V = V  |    | V V = V  |
| V F = F  |    | V F = V  |
| F V = F  |    | F V = V  |
| F F = F  |    | F F = F  |

|    and   |    |    or    |
| 1 1 = 1  |    | 1 1 = 1  |
| 1 0 = 0  |    | 1 0 = 1  |
| 0 1 = 0  |    | 0 1 = 1  |
| 0 0 = 0  |    | 0 0 = 0  |

*/

let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

if ((n1 > n2) && (n3 > n4)) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}

if (!(n1 > n2) && (n3 > n4)) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}

if (!(n1 > n2) && !(n3 > n4)) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}

if ((n1 > n2) || (n3 > n4)) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}

if (!(n1 > n2) || (n3 > n4)) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}

if (!(n1 > n2) || !(n3 > n4)) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}