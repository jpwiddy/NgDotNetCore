using NgDotNetCore.Server.Entities;
using NgDotNetCore.Server.Repositories.Abstract;

namespace NgDotNetCore.Server.Repositories
{
    public class LoggingRepository : EntityBaseRepository<Error>, ILoggingRepository
    {
        public LoggingRepository(ApplicationDbContext context) : base(context) { }

        public override void Commit()
        {
            try
            {
                base.Commit();
            }
            catch { }
        }
    }
}
