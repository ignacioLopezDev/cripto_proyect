// IMAGES
import settingLogo from "../../assets/images/gear2.png";


export const Settings = () => {
    return(
        <li class="nav-item dropdown ">
        <p
          class="nav-link"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ padding: 0 }}
        >
          <img
            src={settingLogo}
            alt={"settingLogo"}
            class="rounded-circle border border-secondary"
          />
        </p>
        <ul class="dropdown-menu  dropdown-menu-dark dropdown-menu-end ">
          <li>
            <p class="dropdown-item">1</p>
          </li>
          <li>
            <p class="dropdown-item">2</p>
          </li>
          <li>
            <p class="dropdown-item">3</p>
          </li>
        </ul>
      </li>
    )
}