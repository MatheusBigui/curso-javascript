let n, n1, n2, n3, n4, n5, n6, x, y, w, z
n1 = n2 = n3 = n4 = n5 = n6 = x = y = w = z = 10

n++ //pós-incrementando o valor 1, ou seja, incrementando(adicionando) depois de usar
console.log(n1++)
++n //pré-incrementando o valor 1, ou seja, incrementando(adicionando) antes de usar
console.log(++n2)
n-- //pós-decrementando o valor 1, ou seja, decrementando(retirando) depois de usar
console.log(n3--)
--n //pré-decrementando o valor 1, ou seja, decrementando(retirando) antes de usar
console.log(--n4)
console.log(n5 += x)//n5 + x = x
console.log(n6 -= y)//n6 + y = y
console.log(w + "" + z)//As áspas vazias tornam essa operação em uma concatenação