
// 21. Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1,list2) {
    let dummy = new ListNode(-1)
    let head = dummy
    while(list1 && list2){

        console.log({dummy,head})
        if(list1.val < list2.val){
            head.next = list1
            list1 = list1.next
        }

        else{
            head.next = list2
            list2 = list2.next
        
        }
        head = head.next

    }
    if(list1){
        head.next = list1
    }
    if(list2){
        head.next= list2
    }


    console.log(dummy.next)
    
    return dummy.next


};