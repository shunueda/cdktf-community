// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/privilege_repository_content_selector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivilegeRepositoryContentSelectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of allowed actions. For a list of applicable values see https://help.sonatype.com/repomanager3/nexus-repository-administration/access-control/privileges#Privileges-PrivilegeTypes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/privilege_repository_content_selector#actions PrivilegeRepositoryContentSelector#actions}
  */
  readonly actions: string[];
  /**
  * The content selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/privilege_repository_content_selector#content_selector PrivilegeRepositoryContentSelector#content_selector}
  */
  readonly contentSelector: string;
  /**
  * A description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/privilege_repository_content_selector#description PrivilegeRepositoryContentSelector#description}
  */
  readonly description?: string;
  /**
  * The format of the referenced Repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/privilege_repository_content_selector#format PrivilegeRepositoryContentSelector#format}
  */
  readonly format: string;
  /**
  * The name of the privilege. This value cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/privilege_repository_content_selector#name PrivilegeRepositoryContentSelector#name}
  */
  readonly name: string;
  /**
  * Name of the repository the privilege applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/privilege_repository_content_selector#repository PrivilegeRepositoryContentSelector#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/privilege_repository_content_selector nexus_privilege_repository_content_selector}
*/
export class PrivilegeRepositoryContentSelector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_privilege_repository_content_selector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivilegeRepositoryContentSelector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivilegeRepositoryContentSelector to import
  * @param importFromId The id of the existing PrivilegeRepositoryContentSelector that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/privilege_repository_content_selector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivilegeRepositoryContentSelector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_privilege_repository_content_selector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/privilege_repository_content_selector nexus_privilege_repository_content_selector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivilegeRepositoryContentSelectorConfig
  */
  public constructor(scope: Construct, id: string, config: PrivilegeRepositoryContentSelectorConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_privilege_repository_content_selector',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._contentSelector = config.contentSelector;
    this._description = config.description;
    this._format = config.format;
    this._name = config.name;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // content_selector - computed: false, optional: false, required: true
  private _contentSelector?: string; 
  public get contentSelector() {
    return this.getStringAttribute('content_selector');
  }
  public set contentSelector(value: string) {
    this._contentSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSelectorInput() {
    return this._contentSelector;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._actions),
      content_selector: cdktf.stringToTerraform(this._contentSelector),
      description: cdktf.stringToTerraform(this._description),
      format: cdktf.stringToTerraform(this._format),
      name: cdktf.stringToTerraform(this._name),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._actions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      content_selector: {
        value: cdktf.stringToHclTerraform(this._contentSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
