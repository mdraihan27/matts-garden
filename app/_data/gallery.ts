export type GalleryProject = {
  id: string;
  title: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
};

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "oak-lane-refresh",
    title: "Complete Front Garden Refresh",
    location: "Oak Lane Residence",
    description:
      "A heavily overgrown frontage was cleared, reshaped, and brought back to a clean, balanced look with crisp lawn edges and restored planting borders.",
    beforeImage: "/assets/images/before-after/Before_1.jpg",
    afterImage: "/assets/images/before-after/After_1.jpg",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    id: "patio-border-reset",
    title: "Patio Border and Lawn Reset",
    location: "Maple Court Home",
    description:
      "Uneven growth around the patio was corrected with structured trimming and lawn leveling work, creating a cleaner outdoor space that is easier to maintain.",
    beforeImage: "/assets/images/before-after/Before_2.jpg",
    afterImage: "/assets/images/before-after/After_2.jpg",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    id: "driveway-edge-restoration",
    title: "Driveway Edge Restoration",
    location: "Willow Crescent Property",
    description:
      "This project focused on restoring edge definition, removing buildup, and refining the overall shape so the driveway and lawn transition look intentional and sharp.",
    beforeImage: "/assets/images/before-after/Before_3.jpg",
    afterImage: "/assets/images/before-after/After_3.jpg",
    beforeLabel: "Before",
    afterLabel: "After",
  },
];
