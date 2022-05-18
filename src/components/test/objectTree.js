const tree = {
    value: 10,
    left : {
        value: 3,
        right: {
            value: 3,
            right : {
                value:1,
                left:{
                    value: 5
                },
                right:{
                    value:7
                }
            }
        }
    },
    right : {
        value: 5,
        left: {
            value: 3,
            right:{
                value:0
            },
            left: {
                value: 7
            }
        },
        right: {
            value:8
        }
    }
}

function treeSum(tree){

        if (tree.right && tree.left ) {
            return treeSum(tree.right) + treeSum(tree.left) + tree.value;
        }
        if (tree.right){
            return treeSum(tree.right) + tree.value;
        }
        if (tree.left) {
            return treeSum(tree.left) + tree.value;
        }


    return tree.value;


}


const tree2 = {
    value: 5,
    left:{
        value:3,
        right: {
            value:5
        }
    },
    right: {
        value:3,
    }
}

const tree3 = {
    value:5
}
console.log(treeSum(tree))



