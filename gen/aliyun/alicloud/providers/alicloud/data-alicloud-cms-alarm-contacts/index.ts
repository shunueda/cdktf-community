// https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cms_alarm_contacts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCmsAlarmContactsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cms_alarm_contacts#chanel_type DataAlicloudCmsAlarmContacts#chanel_type}
  */
  readonly chanelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cms_alarm_contacts#chanel_value DataAlicloudCmsAlarmContacts#chanel_value}
  */
  readonly chanelValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cms_alarm_contacts#id DataAlicloudCmsAlarmContacts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cms_alarm_contacts#ids DataAlicloudCmsAlarmContacts#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cms_alarm_contacts#name_regex DataAlicloudCmsAlarmContacts#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cms_alarm_contacts#output_file DataAlicloudCmsAlarmContacts#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudCmsAlarmContactsContacts {
}

export function dataAlicloudCmsAlarmContactsContactsToTerraform(struct?: DataAlicloudCmsAlarmContactsContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCmsAlarmContactsContactsToHclTerraform(struct?: DataAlicloudCmsAlarmContactsContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCmsAlarmContactsContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCmsAlarmContactsContacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCmsAlarmContactsContacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_contact_name - computed: true, optional: false, required: false
  public get alarmContactName() {
    return this.getStringAttribute('alarm_contact_name');
  }

  // channels_aliim - computed: true, optional: false, required: false
  public get channelsAliim() {
    return this.getStringAttribute('channels_aliim');
  }

  // channels_ding_web_hook - computed: true, optional: false, required: false
  public get channelsDingWebHook() {
    return this.getStringAttribute('channels_ding_web_hook');
  }

  // channels_mail - computed: true, optional: false, required: false
  public get channelsMail() {
    return this.getStringAttribute('channels_mail');
  }

  // channels_sms - computed: true, optional: false, required: false
  public get channelsSms() {
    return this.getStringAttribute('channels_sms');
  }

  // channels_state_aliim - computed: true, optional: false, required: false
  public get channelsStateAliim() {
    return this.getStringAttribute('channels_state_aliim');
  }

  // channels_state_ding_web_hook - computed: true, optional: false, required: false
  public get channelsStateDingWebHook() {
    return this.getStringAttribute('channels_state_ding_web_hook');
  }

  // channels_state_mail - computed: true, optional: false, required: false
  public get channelsStateMail() {
    return this.getStringAttribute('channels_state_mail');
  }

  // channels_status_sms - computed: true, optional: false, required: false
  public get channelsStatusSms() {
    return this.getStringAttribute('channels_status_sms');
  }

  // contact_groups - computed: true, optional: false, required: false
  public get contactGroups() {
    return this.getListAttribute('contact_groups');
  }

  // describe - computed: true, optional: false, required: false
  public get describe() {
    return this.getStringAttribute('describe');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lang - computed: true, optional: false, required: false
  public get lang() {
    return this.getStringAttribute('lang');
  }
}

export class DataAlicloudCmsAlarmContactsContactsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCmsAlarmContactsContactsOutputReference {
    return new DataAlicloudCmsAlarmContactsContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cms_alarm_contacts alicloud_cms_alarm_contacts}
*/
export class DataAlicloudCmsAlarmContacts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cms_alarm_contacts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCmsAlarmContacts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCmsAlarmContacts to import
  * @param importFromId The id of the existing DataAlicloudCmsAlarmContacts that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cms_alarm_contacts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCmsAlarmContacts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cms_alarm_contacts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cms_alarm_contacts alicloud_cms_alarm_contacts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCmsAlarmContactsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCmsAlarmContactsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cms_alarm_contacts',
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
    this._chanelType = config.chanelType;
    this._chanelValue = config.chanelValue;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chanel_type - computed: false, optional: true, required: false
  private _chanelType?: string; 
  public get chanelType() {
    return this.getStringAttribute('chanel_type');
  }
  public set chanelType(value: string) {
    this._chanelType = value;
  }
  public resetChanelType() {
    this._chanelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chanelTypeInput() {
    return this._chanelType;
  }

  // chanel_value - computed: false, optional: true, required: false
  private _chanelValue?: string; 
  public get chanelValue() {
    return this.getStringAttribute('chanel_value');
  }
  public set chanelValue(value: string) {
    this._chanelValue = value;
  }
  public resetChanelValue() {
    this._chanelValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chanelValueInput() {
    return this._chanelValue;
  }

  // contacts - computed: true, optional: false, required: false
  private _contacts = new DataAlicloudCmsAlarmContactsContactsList(this, "contacts", false);
  public get contacts() {
    return this._contacts;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chanel_type: cdktf.stringToTerraform(this._chanelType),
      chanel_value: cdktf.stringToTerraform(this._chanelValue),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chanel_type: {
        value: cdktf.stringToHclTerraform(this._chanelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chanel_value: {
        value: cdktf.stringToHclTerraform(this._chanelValue),
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
