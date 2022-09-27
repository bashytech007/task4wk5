const express=require(`express`)

const {
   
    getHobby,
    insertHobby,
    getOneHobby,
    updateHobby,
    deleteHobby,
    search,
   
} =require(`../controller/Hobby`)

const router=express.Router()

router.get(`/`,getHobby)
router.get(`/:hobbyId`,getOneHobby)
router.post(`/`,insertHobby)
router.put(`/:hobbyId`,updateHobby)
router.delete(`/:hobbyId`,deleteHobby)
router.get(`/search/all`,search)

module.exports=router;