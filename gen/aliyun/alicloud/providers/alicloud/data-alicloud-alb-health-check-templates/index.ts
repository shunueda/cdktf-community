// https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/alb_health_check_templates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudAlbHealthCheckTemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/alb_health_check_templates#health_check_template_ids DataAlicloudAlbHealthCheckTemplates#health_check_template_ids}
  */
  readonly healthCheckTemplateIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/alb_health_check_templates#health_check_template_name DataAlicloudAlbHealthCheckTemplates#health_check_template_name}
  */
  readonly healthCheckTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/alb_health_check_templates#id DataAlicloudAlbHealthCheckTemplates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/alb_health_check_templates#ids DataAlicloudAlbHealthCheckTemplates#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/alb_health_check_templates#name_regex DataAlicloudAlbHealthCheckTemplates#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/alb_health_check_templates#output_file DataAlicloudAlbHealthCheckTemplates#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudAlbHealthCheckTemplatesTemplates {
}

export function dataAlicloudAlbHealthCheckTemplatesTemplatesToTerraform(struct?: DataAlicloudAlbHealthCheckTemplatesTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlbHealthCheckTemplatesTemplatesToHclTerraform(struct?: DataAlicloudAlbHealthCheckTemplatesTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlbHealthCheckTemplatesTemplatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudAlbHealthCheckTemplatesTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlbHealthCheckTemplatesTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health_check_codes - computed: true, optional: false, required: false
  public get healthCheckCodes() {
    return this.getListAttribute('health_check_codes');
  }

  // health_check_connect_port - computed: true, optional: false, required: false
  public get healthCheckConnectPort() {
    return this.getNumberAttribute('health_check_connect_port');
  }

  // health_check_host - computed: true, optional: false, required: false
  public get healthCheckHost() {
    return this.getStringAttribute('health_check_host');
  }

  // health_check_http_version - computed: true, optional: false, required: false
  public get healthCheckHttpVersion() {
    return this.getStringAttribute('health_check_http_version');
  }

  // health_check_interval - computed: true, optional: false, required: false
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }

  // health_check_method - computed: true, optional: false, required: false
  public get healthCheckMethod() {
    return this.getStringAttribute('health_check_method');
  }

  // health_check_path - computed: true, optional: false, required: false
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }

  // health_check_protocol - computed: true, optional: false, required: false
  public get healthCheckProtocol() {
    return this.getStringAttribute('health_check_protocol');
  }

  // health_check_template_id - computed: true, optional: false, required: false
  public get healthCheckTemplateId() {
    return this.getStringAttribute('health_check_template_id');
  }

  // health_check_template_name - computed: true, optional: false, required: false
  public get healthCheckTemplateName() {
    return this.getStringAttribute('health_check_template_name');
  }

  // health_check_timeout - computed: true, optional: false, required: false
  public get healthCheckTimeout() {
    return this.getNumberAttribute('health_check_timeout');
  }

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}

export class DataAlicloudAlbHealthCheckTemplatesTemplatesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudAlbHealthCheckTemplatesTemplatesOutputReference {
    return new DataAlicloudAlbHealthCheckTemplatesTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/alb_health_check_templates alicloud_alb_health_check_templates}
*/
export class DataAlicloudAlbHealthCheckTemplates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alb_health_check_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudAlbHealthCheckTemplates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudAlbHealthCheckTemplates to import
  * @param importFromId The id of the existing DataAlicloudAlbHealthCheckTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/alb_health_check_templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudAlbHealthCheckTemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alb_health_check_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/alb_health_check_templates alicloud_alb_health_check_templates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudAlbHealthCheckTemplatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudAlbHealthCheckTemplatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alb_health_check_templates',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.261.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._healthCheckTemplateIds = config.healthCheckTemplateIds;
    this._healthCheckTemplateName = config.healthCheckTemplateName;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_check_template_ids - computed: false, optional: true, required: false
  private _healthCheckTemplateIds?: string[]; 
  public get healthCheckTemplateIds() {
    return this.getListAttribute('health_check_template_ids');
  }
  public set healthCheckTemplateIds(value: string[]) {
    this._healthCheckTemplateIds = value;
  }
  public resetHealthCheckTemplateIds() {
    this._healthCheckTemplateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTemplateIdsInput() {
    return this._healthCheckTemplateIds;
  }

  // health_check_template_name - computed: false, optional: true, required: false
  private _healthCheckTemplateName?: string; 
  public get healthCheckTemplateName() {
    return this.getStringAttribute('health_check_template_name');
  }
  public set healthCheckTemplateName(value: string) {
    this._healthCheckTemplateName = value;
  }
  public resetHealthCheckTemplateName() {
    this._healthCheckTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTemplateNameInput() {
    return this._healthCheckTemplateName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // templates - computed: true, optional: false, required: false
  private _templates = new DataAlicloudAlbHealthCheckTemplatesTemplatesList(this, "templates", false);
  public get templates() {
    return this._templates;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      health_check_template_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthCheckTemplateIds),
      health_check_template_name: cdktf.stringToTerraform(this._healthCheckTemplateName),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      health_check_template_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthCheckTemplateIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      health_check_template_name: {
        value: cdktf.stringToHclTerraform(this._healthCheckTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
