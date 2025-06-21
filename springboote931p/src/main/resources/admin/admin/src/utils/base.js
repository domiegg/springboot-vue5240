const base = {
    get() {
        return {
            url : "http://localhost:8080/springboote931p/",
            name: "springboote931p",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboote931p/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生综合成绩测评系统"
        } 
    }
}
export default base
