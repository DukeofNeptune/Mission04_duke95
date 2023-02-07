using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_duke95.Models
{
    public class GradeCalculatorModel
    {
        //Creating Models and Validating Models for GradeCalculator
        [Required]
        [Range(0, 100, ErrorMessage = "Percentage must be 0-100")]
        public float Assignments { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Percentage must be 0-100")]
        public float Group { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Percentage must be 0-100")]
        public float Quiz { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Percentage must be 0-100")]
        public float Midterm { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Percentage must be 0-100")]
        public float Final { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Percentage must be 0-100")]
        public float Intex { get; set; }

        

    }
}
