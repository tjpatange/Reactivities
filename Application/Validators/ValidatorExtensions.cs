using FluentValidation;

namespace Application.Validators
{
    public static class ValidatorExtensions
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder
                .NotEmpty()
                        .MinimumLength(6).WithMessage("Password must be of minimun 6 characters")
                        .Matches("[A-Z]").WithMessage("Password must contain at least 1 capital letter")
                        .Matches("[a-z]").WithMessage("Password must contain atleast 1 lower letter")
                        .Matches("[0-9]").WithMessage("Password must contain atleast 1 number")
                    .Matches("[^a-zA-z0-9]").WithMessage("Password must contain non-alphanumeric");


            return options;
        }
    }
}