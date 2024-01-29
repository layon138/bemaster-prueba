const got = require('got');


const getRepositoryListByGoogle = async (req, res) => {
    try {
        const userToFilter = req.query.id || 'google'; 
        const url=`${process.env.ENDPOINT}/search/repositories?q=org:${userToFilter}&sort=stars&order=desc&per_page=10`
        const response = await got(url, { json: true,options:{
            headers:{
                Authorization: `Bearer ${process.env.AUTORIZATIONAPI}`,
                'Content-Type': 'application/json',
            }
        } });
        res.status(200).json({
            data: {
              list: response.body.items.map(repo=>{
                return {
                    fullname:repo.full_name,
                    name:repo.name
                }
              }) || [],
            },
            status: "repos Find",
          });
        
      } catch (error) {
        res.json({
            data: {
              list: [],
            },
            status: "error when find repos",
          });
      }
      
  };
  
  module.exports = {
    getRepositoryListByGoogle
  };
  

