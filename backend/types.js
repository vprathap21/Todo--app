const zod = require("zod");
const todoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
});

const completedTodoSchema = zod.object({
    id: zod.string(),
    completed: zod.boolean(),
});

module.exports = {
    todoSchema : todoSchema,
    completedTodoSchema : completedTodoSchema
}