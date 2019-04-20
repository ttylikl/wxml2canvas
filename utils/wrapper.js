let wrapper = {};

let wf = f => {
    return function(args){
        console.log(args);
        return new Promise((resolve, reject)=>{
            f({
                ...args,
                success:(r)=>resolve(r), 
                fail:(r)=>reject(r)
            })
        })
    };
}

wrapper.getImageInfo = wf(wx.getImageInfo);

module.exports = wrapper;
