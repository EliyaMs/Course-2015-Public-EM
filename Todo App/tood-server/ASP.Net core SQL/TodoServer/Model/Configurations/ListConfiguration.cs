using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Model;

namespace TodoServer.Configurations
{
	public class ListConfiguration : IEntityTypeConfiguration<List>
    {
        public void Configure(EntityTypeBuilder<List> builder)
        {
            builder.ToTable("Lists");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Caption)
                .IsRequired()
                .HasMaxLength(15);

            builder.Property(x => x.Description)
                .IsRequired()
                .HasMaxLength(70);

            builder.Property(x => x.Image)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(x => x.Color)
                .IsRequired()
                .HasMaxLength(30);
        }
    }
}
