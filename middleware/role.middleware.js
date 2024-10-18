const checkRole = (role, action) => {
    return (req, res, next) => {
        const userRole = req.user.role; 

        if (userRole === role) {
            next(); 
        } else {
            res.status(404).json({ message: 'No Data Found' }); 
        }
    };
};

export default checkRole;