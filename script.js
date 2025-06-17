document.addEventListener('DOMContentLoaded', function() {

    // ======================= 诊断日志 =======================
    // 请在浏览器中按 F12 打开开发者工具，并切换到 "Console" (控制台) 标签页。
    // 如果你能看到下面这条消息，就说明新的脚本已经成功加载并执行了。
    // 如果看不到，说明浏览器还在使用旧的缓存文件，请再次尝试“强制刷新”。
    console.log("编码助手提示： 《小小科学家》汇报网页脚本已成功加载并执行！");
    // ========================================================

    // 初始化粒子背景
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#5d7fff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00f2ff",
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            }
        },
        retina_detect: true
    });
    
    // 添加3D悬浮效果到标题
    const title = document.querySelector('.holographic-text');
    if (title) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 25;
            const y = (window.innerHeight / 2 - e.pageY) / 25;
            title.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // 学生数据
    const students = [
        {
            name: '潘卓熙',
            avatarUrl: 'pzxh.jpg',
            comment: '卓熙同学，你在后半学期的学习中，展现了超越“小助手”的领导者潜力。尤其在“自制投石车”这一挑战性实验中，你不仅迅速掌握了杠杆原理，还主动与同学探讨如何调整配重以达到更远的射程 。你对知识的渴望，已从“是什么”深化到“为什么”的层面。继续保持这份深度思考的习惯，它将引领你揭开更多科学的奥秘。',
            projectUrl: 'pzx.jpg'
        },
        {
            name: '陈昱皓',
            avatarUrl: 'cyhh.jpg',
            comment: '昱皓同学，你的进步是本学期后半段的一大亮点。老师欣喜地看到，你的课堂专注度有了质的提升，尤其在听讲“微波炉原理”这类较为抽象的知识时，你表现得格外认真 。更值得庆祝的是，你在动手能力上克服了诸多困难，也成功搭建出了结构精密的作品。这证明了只要你下定决心，就没有克服不了的挑战。',
            projectUrl: 'cyh.jpg'
        },
        {
            name: '苏柏懿',
            avatarUrl: 'sbyh.jpg',
            comment: '柏懿同学用一整个学期的坚持，为我们上演了精彩的“逆袭”。如果说期中时你还在为精细动作而努力，那么期末时，你已经能从容地安装“太阳能飞机”的微小齿轮和太阳能板了 。你的进步是踏实与专注的最好回报。现在，你不仅能独立完成任务，更在过程中透露出自信与从容。为你持之以恒的努力点赞！',
            projectUrl: 'sby.jpg'
        },
        {
            name: '彭伟航',
            avatarUrl: 'pwhh.jpg',
            comment: '彭伟航同学性格沉稳，课堂上思维活跃，常能提出富有创造性的问题。在“自动发球机”和“风力发电”实验中，你针对实验器材的改良提出了独特见解，表现出较强的科学思辨能力。不过，动手操作方面仍需加强。你在后半学期更加积极参与动手操作，完成度较期中有明显提升。希望你继续多动手实践，积累经验，将丰富的思路落实到操作中，未来一定能取得优异表现。',
            projectUrl: 'pwh.jpg'
        },
        {
            name: '陈仲燊',
            avatarUrl: 'czsh.jpg',
            comment: '仲燊同学依然保持着机灵活泼、思维敏捷的特点，动手能力非常出色。在“感应垃圾桶”“电动飞雪”等课程中，他搭建迅速，结构合理，常能第一个完成实验搭建任务，成为小组中的技术担当。不过，在精细动作如导线缠绕、元件固定方面仍需更为细致。好在你态度端正，愿意反复练习，不怕困难。课余时间，你还积极帮同学调整装置、解决卡顿问题，体现了良好的团队精神和责任感。希望你继续在细节上下功夫，保持良好的科学兴趣，未来在更广阔的世界中大放异彩。',
            projectUrl: 'czs.jpg'
        },
        {
            name: '梁慕晨',
            avatarUrl: 'lmch.jpg',
            comment: '慕晨同学，你在后半学期的课堂表现，让老师看到了一个更加专注、更有潜力的你。尤其在制作“孔雀开屏”光纤灯时，你被光的全反射原理深深吸引，并投入了极大的耐心去完成作品，最终呈现的效果非常出色 。这证明了当你将聪慧与专注结合时，总能创造出令人惊喜的成果。希望你继续保持这份投入，让自己的才华得到最充分的展现。',
            projectUrl: 'lmc.jpg'
        },
        {
            name: '刘承睿',
            avatarUrl: 'lcrh.jpg',
            comment: '承睿同学，你的聪明和活力在后半学期转化为了更强大的学习动力。在搭建结构复杂的“火星探测车”时，你不仅速度快，还对太阳能驱动的原理表现出浓厚兴趣 。更重要的是，你的课堂纪律有了显著改善，能更好地将精力集中在科学探索上。请继续将你的活力引导到对知识的钻研中，你将成为一名优秀的、充满能量的“小小科学家”。',
            projectUrl: 'lcr.jpg'
        },
        {
            name: '毕梓琪',
            avatarUrl: 'bzqh.jpg',
            comment: '梓琪同学思维敏捷，课堂表现出色，特别擅长提出新颖独特的见解，为课程讨论增添不少亮点。在“太阳能直升机”“感应垃圾桶”实验中，她能从生活实际出发，提出实验改进方案，展现出良好的科学思辨力。动手能力方面，你操作稳健，细节把控到位，作品完成度高。在小组合作中，你积极分工协作，勤于思考回答老师的问题，条理清晰，语言表达流畅。希望你持续打磨动手技巧，将创意转化为更多科学作品，取得优异成果。',
            projectUrl: 'bzq.jpg'
        },
        {
            name: '朱海睿',
            avatarUrl: 'zhrh.jpg',
            comment: ' 朱海睿同学性格踏实，课堂态度认真，能按要求完成各项实验任务。在“牛顿色盘”“电动飞雪”等课程中，他能够独立完成操作，实验效果良好。不过，动手熟练度还有待进一步提高，有时在细节处理如导线连接、装置固定等步骤上稍显迟缓。希望你在今后的学习中多加练习，提升操作熟练度，同时保持认真踏实的学习态度，争取取得更大进步。',
            projectUrl: 'zhr.jpg'
        },
        {
            name: '劳健童',
            avatarUrl: 'ljth.jpg',
            comment: '健童同学，你一如既往地沉稳可靠，是班级中稳定发挥的典范。在后半学期的学习中，你不仅能高质量地完成如“风力发电”模型搭建等各项任务 ，老师还发现你开始更愿意与同学交流你的发现。这是一种非常好的转变。在未来的学习中，期待你不仅成为一名出色的独立完成者，更能成为一名乐于分享的团队合作者。',
            projectUrl: 'ljt.jpg'
        },
        {
            name: '李欣欣',
            avatarUrl: 'lxxh.jpg',
            comment: '欣欣同学，你在后半学期的学习中，展现了出色的知识迁移与整合能力。在学习“投石车”的杠杆原理时，你能立刻联想到生活中相关的例子 。在面对“太阳能”和“风能”等系列能源课题时，你能清晰地归纳出它们同为清洁能源的特性 。这说明你的科学思维已开始体系化。请继续保持这份深度学习的能力，向着更广阔的科学领域前进！',
            projectUrl: 'lxx.jpg'
        }
    ];

    const avatarGrid = document.getElementById('avatar-grid');
    const modal = document.getElementById('envelope-modal');
    const closeBtn = document.getElementById('close-btn');
    const studentNameEl = document.getElementById('student-name');
    const studentCommentEl = document.getElementById('student-comment');
    const studentImagePlaceholder = document.querySelector('.student-image-placeholder');

    students.forEach((student) => {
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'avatar';

        const avatarInner = document.createElement('div');
        avatarInner.className = 'avatar-inner';
        
        const avatarImg = document.createElement('img');
        avatarImg.src = student.avatarUrl;
        avatarImg.alt = student.name;
        
        const avatarBack = document.createElement('div');
        avatarBack.className = 'avatar-back';
        const backSpan = document.createElement('span');
        backSpan.textContent = "点击查看";
        avatarBack.appendChild(backSpan);

        avatarInner.appendChild(avatarImg);
        avatarInner.appendChild(avatarBack);
        
        const avatarName = document.createElement('span');
        avatarName.textContent = student.name;

        avatarDiv.appendChild(avatarInner);
        avatarDiv.appendChild(avatarName);
        avatarGrid.appendChild(avatarDiv);

        avatarDiv.addEventListener('click', () => {
            openEnvelope(student);
        });
    });

// 在openEnvelope函数中添加延迟，确保动画可见
function openEnvelope(student) {
    studentNameEl.textContent = student.name;
    studentCommentEl.textContent = student.comment;
    studentImagePlaceholder.innerHTML = `<img src="${student.projectUrl}" alt="${student.name}的作品" style="width:100%; height:100%; object-fit:contain;">`;
    
    // 先显示模态框
    modal.classList.add('visible');
    
    // 添加短暂延迟确保动画触发
    setTimeout(() => {
        // 确保信封元素可见
        const envelope = document.querySelector('.envelope');
        if (envelope) {
            envelope.style.opacity = '1';
            envelope.style.transform = 'scale(1) rotateX(0deg)';
        }
    }, 50);
}

// 修改关闭动画
function closeEnvelope() {
    const envelope = document.querySelector('.envelope');
    if (envelope) {
        envelope.style.transform = 'scale(0.8) translateY(20px)';
        envelope.style.opacity = '0';
    }
    
    setTimeout(() => {
        modal.classList.remove('visible');
    }, 300);
}

    closeBtn.addEventListener('click', closeEnvelope);
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeEnvelope();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeEnvelope();
        }
    });
});