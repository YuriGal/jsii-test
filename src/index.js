"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
class Greeter {
    constructor(props) {
        this.greetee = props.greetee;
    }
    greet() {
        return `Hello, ${this.greetee}!`;
    }
}
exports.Greeter = Greeter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJRSxNQUFhLE9BQU87SUFHbEIsWUFBbUIsS0FBbUI7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFTSxLQUFLO1FBQ1YsT0FBTyxVQUFVLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQTtJQUNsQyxDQUFDO0NBQ0Y7QUFWRCwwQkFVQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgR3JlZXRlclByb3BzIHtcbiAgICByZWFkb25seSBncmVldGVlOiBzdHJpbmc7XG4gIH1cbiAgXG4gIGV4cG9ydCBjbGFzcyBHcmVldGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdyZWV0ZWU6IHN0cmluZztcbiAgXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByb3BzOiBHcmVldGVyUHJvcHMpIHtcbiAgICAgIHRoaXMuZ3JlZXRlZSA9IHByb3BzLmdyZWV0ZWU7XG4gICAgfVxuICBcbiAgICBwdWJsaWMgZ3JlZXQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgSGVsbG8sICR7dGhpcy5ncmVldGVlfSFgXG4gICAgfVxuICB9Il19