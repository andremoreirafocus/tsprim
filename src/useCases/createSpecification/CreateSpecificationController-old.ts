import SpecificationsMemoryRepository from "../../modules/cars/repositories/SpecificationsMemoryRepository";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";
import CreateSpecificationsHandler from "./CreateSpecificationHandler";

const specificationsRepository = SpecificationsMemoryRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
const createSpecificationsHandler = new CreateSpecificationsHandler(
  createSpecificationUseCase
);

export default createSpecificationsHandler;
