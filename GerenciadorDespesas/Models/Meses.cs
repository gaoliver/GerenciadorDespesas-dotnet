using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GerenciadorDespesas.Models
{
    public class Meses
    {
        public int MesId { get; set; }

        public string Nome { get; set; }

        public ICollection<Despesas> Despesas { get; set; }

        public Salarios Salarios { get; set; }
    }
}
