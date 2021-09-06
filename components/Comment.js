export default function Comment(comment) {
    // console.log(comment);
    const hasNestedComments = comment.comments.length > 0;

    return `
    <div class="nested-comments-${comment.level}">
        <p class="comment-header">
            ${comment.user} | ${comment.time_ago}
        </p>
        ${comment.content}
        // Call the funciton Comment within the below function 
        ${hasNestedComments ? comment.comments.map(comment => Comment(comment)).join('') : ''}
    </div>
    `;
}