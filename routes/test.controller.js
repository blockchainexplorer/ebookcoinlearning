export default function TestController() {
	const CLASSNAME = "app.controllers.CharacterController";
	console.log("fdfdfd")
	return {
		async a(ctx, next) {	
			ctx.body = 'test ';
		}
	}
}